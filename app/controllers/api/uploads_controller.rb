class Api::UploadsController < Api::BaseController
  def create
    File.open(Rails.root.join('public', 'uploads', file_name), 'wb') do |file|
      file.write(uploaded_contents)
      abort file_name
    end
  end

  private

  def uploaded_io
    params[:file]
  end

  def uploaded_contents
    @uploaded_contents ||= uploaded_io.read
  end

  def hash_contents
    @hash_contents ||= Digest::MD5.hexdigest(uploaded_contents)
  end

  def file_name
    "#{hash_contents}.#{uploaded_io.extname}"
  end
end
