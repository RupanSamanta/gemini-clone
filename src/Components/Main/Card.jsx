function Card({ title, icon }) {
    return (
        <div className="card">
            <p>{title}</p>
            {icon}
        </div>
    )
}

export default Card