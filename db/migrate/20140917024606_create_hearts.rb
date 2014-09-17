class CreateHearts < ActiveRecord::Migration
  def change
    create_table :hearts do |t|
      t.references :story, index: true
      t.string :uuid

      t.timestamps
    end
  end
end
