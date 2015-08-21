class V1::VotesController < ApplicationController
  before_filter :authenticate_user!
  before_action :set_vote, only: [:show, :update, :destroy]

  # GET /votes.json
  def index
    @votes = Vote.all

    render json: @votes
  end

  # GET /votes/1.json
  def show
    render json: @vote
  end

  # POST /votes.json
  def create
    @vote = Vote.new(vote_params)

    if @vote.save
      render json: @vote, status: :created
    else
      render json: @vote.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /votes/1.json
  def update
    @vote = Vote.find(params[:id])

    if @vote.update(vote_params)
      head :no_content
    else
      render json: @vote.errors, status: :unprocessable_entity
    end
  end

  # DELETE /votes/1.json
  def destroy
    @vote.destroy

    head :no_content
  end

  private

    def set_vote
      @vote = Vote.find(params[:id])
    end

    def vote_params
      params.require(:vote).permit(:up, :pitch_id, :user_id)
    end
end
