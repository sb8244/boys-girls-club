class StorySerializer < ActiveModel::Serializer
  attributes :id, :created_at, :name, :age, :field, :content, :featured?, :role, :image

  def image
    object.image.url
  end

end
