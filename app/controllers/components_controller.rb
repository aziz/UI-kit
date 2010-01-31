class ComponentsController < ApplicationController
  # GET /components
  # GET /components.xml
  def index
    @components = Component.all(:order => "updated_at DESC" )

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @components }
    end
  end
  
  def old_index
    @components = Component.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @components }
    end
  end  

  # GET /components/1
  # GET /components/1.xml
  def show
    @component = Component.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @component }
    end
  end
  
  def preview
    @component = Component.find(params[:id])
    render :layout => false
  end

  # GET /components/new
  # GET /components/new.xml
  def new
    @component = Component.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @component }
    end
  end

  # GET /components/1/edit
  def edit
    @component = Component.find(params[:id])
  end

  # POST /components
  # POST /components.xml
  def create
    @component = Component.new(params[:component])

    respond_to do |format|
      if @component.save
        flash[:notice] = 'Component was successfully created.'
        format.html { redirect_to(edit_component_path(@component)) }
        format.xml  { render :xml => @component, :status => :created, :location => @component }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @component.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /components/1
  # PUT /components/1.xml
  def update
    @component = Component.find(params[:id])
    
    changed = false
    # in case the user have changed the category    
    # to keep the counter cache always up to date
    if params[:component][:category_id] != @component.category_id 
      Category.decrease_counter_cache_for(@component.category_id) 
      changed = true
    end
    
    respond_to do |format|
      if @component.update_attributes(params[:component])

        # in case the user have changed the category
        # to keep the counter cache always up to date
        Category.increase_counter_cache_for(@component.category_id) if changed
        
        flash[:notice] = 'Component was successfully updated.'
        format.html { redirect_to(@component) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @component.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /components/1
  # DELETE /components/1.xml
  def destroy
    @component = Component.find(params[:id])
    @component.destroy

    respond_to do |format|
      format.html { redirect_to(components_url) }
      format.xml  { head :ok }
    end
  end
end
