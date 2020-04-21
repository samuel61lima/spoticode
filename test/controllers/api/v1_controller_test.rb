require 'test_helper'

class Api::V1ControllerTest < ActionDispatch::IntegrationTest
  test "should get dashboard" do
    get api_v1_dashboard_url
    assert_response :success
  end

end
