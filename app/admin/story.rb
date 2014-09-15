ActiveAdmin.register Story do
  permit_params :name, :age, :field, :content, :role, :ethnicity, :gender, :image

  form multipart: true do |f|
    f.inputs "Project Details" do
      f.input :name
      f.input :age
      f.input :field
      f.input :content, as: :html_editor
      f.input :role
      f.input :ethnicity
      f.input :gender
      f.input :image
    end
    f.actions
  end
end
