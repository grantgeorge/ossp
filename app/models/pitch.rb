class Pitch < ActiveRecord::Base
  belongs_to :user
  has_many :votes

  scope :featured, -> { order('votes_count DESC') }

  def count_up_votes
    Vote.where(pitch_id: self.id, up: true).count
  end

  def count_down_votes
    Vote.where(pitch_id: self.id, up: false).count
  end

end
