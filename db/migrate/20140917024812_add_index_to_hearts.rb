class AddIndexToHearts < ActiveRecord::Migration
  def change
    add_index :hearts, [:uuid, :story_id], unique: true
  end
end
