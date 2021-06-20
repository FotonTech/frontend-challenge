import { useHistory } from "react-router-dom";

const Detail = () => {
    const history: any = useHistory();
    return (
        <div>
            {history.location.state.book}
        </div>
    )
}

export default Detail;