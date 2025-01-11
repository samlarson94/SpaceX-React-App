export const Modal = (prop) => (
    // <!-- Modal -->
    <div className="modal fade" 
    id={`popup${prop.rocket.id}`} 
    tabIndex="-1" 
    aria-labelledby="exampleModalLabel" 
    aria-hidden="true">
<div className="modal-dialog modal-lg">
<div className="modal-content">
  <div className="modal-header">
    <h5 className="modal-title" id="exampleModalLabel">
      {prop.rocket.name}
      </h5>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>

  {/* MODAL */}
  <div className="modal-body">
    {/* Image slider of additional images*/}
      <div 
          id={`carousel${prop.rocket.id}Controls`}
          className="carousel slide" 
          data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={prop.rocket.flickr_images[0]} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={prop.rocket.flickr_images[1]} class="d-block w-100" alt="..." />
          </div>
        </div>

        <a
          className="carousel-control-prev" 
          href={`#carousel${prop.rocket.id}Controls`}
          role="button"
          data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
        <a
          className="carousel-control-next" 
          href={`#carousel${prop.rocket.id}Controls`}
          role="button" 
          data-bs-slide="next">
            
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
    </div>
    {/* List of Rocket Stats */}
    <div className="row rocket-stats rocket-class-container">
      
    <div className="col-sm-4">
        <h4>Active</h4>
        <p>{prop.rocket.active ? `Yes` : `No`}</p>
      </div>
      <div className="col-sm-4">
        <h4>First Flight</h4>
        <p>{prop.rocket.first_flight}</p>
      </div>
      <div className="col-sm-4">
        <h4>Success Rate</h4>
        <p>{prop.rocket.success_rate_pct}%</p>
      </div>

      <div className="col-sm-4">
        <h4>Height</h4>
        <p>{prop.rocket.height.feet} feet</p>
      </div>
      <div className="col-sm-4">
        <h4>Diameter</h4>
        <p>{prop.rocket.diameter.feet} feet</p>
      </div>
      <div className="col-sm-4">
        <h4>Mass</h4>
        <p>{prop.rocket.mass.kg/1000} Tonne</p>
      </div>
      <div className="col-sm-4">
        <h4>Cost per Launch</h4>
        <p>${prop.rocket.cost_per_launch/1000000} Million</p>
      </div>
      <div className="col-sm-4">
        <h4>Fuel Amount</h4>
        <p>{prop.rocket.first_stage.fuel_amount_tons} tons</p>
      </div>
      <div className="col-sm-4">
        <h4>Stages</h4>
        <p>{prop.rocket.stages}</p>
      </div>
      <div className="col-sm-4">
        <h4>Reusable</h4>
        <p>{prop.rocket.first_stage.reusable ? `Yes` : `No`}</p>
      </div>
      <div className="col-sm-4">
        <h4>Number of Engines</h4>
        <p>{prop.rocket.first_stage.engines}</p>
      </div>
      <div className="col-sm-4">
        <h4>Landing Legs</h4>
        <p>{prop.rocket.landing_legs.number} {prop.rocket.landing_legs.material}</p>
      </div>
    </div>
    <p>{prop.rocket.description}</p>
    <a href={prop.rocket.wikipedia} type="button" target="_blank" className="btn btn-secondary read-more-btn">Read More about {prop.rocket.name}</a>
  </div>
  <div className="modal-footer">
  {/* Link to Wikipedia to learn more about the rocket */}

  </div>
</div>
</div>
</div>
)
