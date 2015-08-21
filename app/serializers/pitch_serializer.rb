class PitchSerializer < ActiveModel::Serializer
  attributes :id, :title, :text, :up_vote_count, :down_vote_count,
  :user_up_voted, :user_down_voted, :created_at
  # attributes(*Pitch.attribute_names.map(&:to_sym))
  has_many :votes
  has_one :user

  def up_vote_count
    object.count_up_votes
  end

  def down_vote_count
    object.count_down_votes
  end

  def user_up_voted
    object.votes.exists?(user_id: current_user.id, up: true) if current_user
  end

  def user_down_voted
    object.votes.exists?(user_id: current_user.id, up: false) if current_user
  end
end
