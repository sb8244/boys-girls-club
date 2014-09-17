class StorySerializer < ActiveModel::Serializer
  attributes :id, :created_at, :name, :age, :field, :content, :featured?,
             :role, :image, :ethnicity, :gender, :youtube

  def image
    object.image.url
  end

end
