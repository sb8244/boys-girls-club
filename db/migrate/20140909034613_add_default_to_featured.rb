class AddDefaultToFeatured < ActiveRecord::Migration
  def up
    change_column :stories, :featured, :boolean, null: false, default: false
  end

  def down
    change_column :stories, :featured, :boolean, null: false
  end
end
