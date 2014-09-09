module JsonHelpers
  def response_json
    @response_json ||= JSON.parse(response.body, symbolize_names: true)
  end
end

RSpec.configure do |config|
  config.include JsonHelpers, type: :controller
end
