class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.boolean :up
      t.references :user, index: true, foreign_key: true
      t.references :pitch, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
