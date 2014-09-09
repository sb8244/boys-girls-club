class Story < ActiveRecord::Base
  validates :role, inclusion: { in: %w(mentor mentee parent) }
  has_attached_file :image
  validates_attachment_file_name :image, :matches => [/png\Z/, /jpe?g\Z/, /gif\Z/]
end
