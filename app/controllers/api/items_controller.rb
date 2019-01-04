class Api::ItemsController < ApplicationController
  before_action :set_list
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: @list.items
  end

  def show
    render json: @item
  end

  def create
    @item = @list.items.new(item_params)
    if @item.save
      render json: @list.items
    else
      render json: @item.errors, status: 422
    end
  end

  def update
    if @item.update(item_params)
      render json: @list.items
    else
      render json: @item.errors, status: 422
    end
  end

  def destroy
    @item.destroy
    render json: { message: 'Item deleted' }
  end

  private
  def item_params
    params.require(:item).permit(:name, :price, :complete)
  end

  def set_item
    @item = Item.find(params[:id])
  end

  def set_list
    @list = List.find(params[:list_id])
  end

end