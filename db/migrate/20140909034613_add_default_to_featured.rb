class AddDefaultToFeatured < ActiveRecord::Migration
  def up
    change_column :stories, :featured, :integer, null: false, default: false
  end

  def down
    change_column :stories, :featured, :integer, null: false
  end
end
