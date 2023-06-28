import './BtnMain.css'

function BtnMain(props) {
    return ( 
        <div className="btn-border">
            <a href="">{props.text}</a>
        </div>
     );
}

export default BtnMain;