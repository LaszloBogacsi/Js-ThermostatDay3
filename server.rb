require 'sinatra/base'
require 'json'

class Thermostat_Server < Sinatra::Base

  enable :sessions


  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    # temperature = session[:data] || 3.to_s
    $temperature ||= 3.to_s
    # content_type :json
    # {temperature: $temperature}.to_json
    $temperature
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    session[:data] = params[:temperature]
    $temperature = session[:data]
    p session[:data]
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
