class Vote < ActiveRecord::Base
  belongs_to :pitch
  belongs_to :user
  after_save :update_counter_cache

  def update_counter_cache
    self.pitch.votes_count = Vote.where(up: true, pitch_id: self.pitch_id).count - Vote.where(up: false, pitch_id: self.pitch_id).count
    self.pitch.save
  end

end
