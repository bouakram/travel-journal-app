function Main({items}) {
    return (
        
        <main>
            <div className="main-img">
                <img src={items.img}/>
            </div>
            <div className="content">
            <i class="ri-map-pin-2-fill location"  ><span>{items.location}</span></i> <span><a href="www.google.come">{items.googleM}</a></span>
            <h1>{items.title}</h1>
            <p className='time'>{items.startD} - {items.endD}</p>
            <p className='descreption'>{items.description}</p>
            </div>
        </main>
            
    )
}

export default Main