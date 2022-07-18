export default function StoriesItem(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    );
}