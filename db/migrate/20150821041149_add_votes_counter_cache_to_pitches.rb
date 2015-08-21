class AddVotesCounterCacheToPitches < ActiveRecord::Migration
  def change
    add_column :pitches, :votes_count, :integer, default: 0
  end
end
