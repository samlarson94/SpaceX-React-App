export const Card = (prop) => (
    <div className="col-sm-6">
    <div className="card" key={prop.rocket.id}>
      <img src={prop.rocket.flickr_images[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prop.rocket.name}</h5>
          <p className="card-text"></p>
          <button type="button" 
                class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target={`#popup${prop.rocket.id}`}>
            View Rocket Stats
            </button>
        </div>
  </div>
</div>
    )