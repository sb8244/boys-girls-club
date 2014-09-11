class Story < ActiveRecord::Base
  validates :role, inclusion: { in: %w(mentor mentee parent) }

  has_attached_file :image
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
