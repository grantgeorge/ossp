class CreatePitches < ActiveRecord::Migration
  def change
    create_table :pitches do |t|
      t.string :title
      t.text :text
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
