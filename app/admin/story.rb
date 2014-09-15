ActiveAdmin.register Story do
  permit_params :name, :age, :field, :content, :role, :ethnicity, :gender, :image, :featured

  form multipart: true do |f|
    f.inputs "Project Details" do
      f.input :name
      f.input :featured, as: :boolean
      f.input :age
      f.input :field
      f.input :content, as: :html_editor
      f.input :role, as: :select, collection: Story.roles
      f.input :ethnicity, as: :select, collection: Story.ethnicities
      f.input :gender, as: :select, collection: Story.genders
      f.input :image
    end
    f.actions
  end
end
