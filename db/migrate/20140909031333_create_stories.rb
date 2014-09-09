class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :name, null: false
      t.text :content, null: false
      t.text :image, null: false
      t.string :field, null: false
      t.integer :age, null: false
      t.boolean :featured, null: false

      t.timestamps
    end
  end
end
