class V1::PitchesController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :update, :destroy]
  before_action :set_pitch, only: [:show, :update, :destroy]

  # GET /pitches.json
  def index
    if params[:sort_by] == "rating"
      @pitches = Pitch.paginate(page: params[:page], per_page: 20).includes(:votes, :user).featured
    else
      @pitches = Pitch.paginate(page: params[:page], per_page: 20).includes(:votes, :user).order('created_at DESC')
    end
    render json: @pitches
  end

  # GET /pitches/1.json
  def show
    render json: @pitch
  end

  # POST /pitches.json
  def create
    @pitch = Pitch.new(pitch_params)

    if @pitch.save
      render json: @pitch, status: :created
    else
      render json: @pitch.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pitches/1.json
  def update
    @pitch = Pitch.find(params[:id])

    if @pitch.update(pitch_params)
      head :no_content
    else
      render json: @pitch.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pitches/1.json
  def destroy
    @pitch.destroy

    head :no_content
  end

  private

    def set_pitch
      @pitch = Pitch.find(params[:id])
    end

    def pitch_params
      params.require(:pitch).permit(:title, :text, :user_id)
    end
end
