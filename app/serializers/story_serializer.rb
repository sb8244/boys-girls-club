class StorySerializer < ActiveModel::Serializer
  attributes :id, :created_at, :name, :age, :field, :content, :featured?,
             :role, :image, :ethnicity, :gender, :youtube, :hearted

  def image
    object.image.url
  end

  def hearted
    object.hearted || false
  end

end
