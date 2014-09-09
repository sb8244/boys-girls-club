Paperclip::Attachment.default_options[:url] = '/uploads/:hash.:extension'
Paperclip::Attachment.default_options[:path] = ':rails_root/public/uploads/:hash.:extension'
Paperclip::Attachment.default_options[:hash_secret] = Rails.application.secrets[:secret_key_base]
