import { Container, InputStyled } from "./style";

interface InputProps {
    label: string;
    name: string;
    value: string;
    onChange: Function;
}

export default function Input(props: InputProps) {
    return (
        <Container>
            <label>{props.label}</label>
            <InputStyled
                required
                value={props.value}
                name={props.name}
                onChange={(ev) => {
                    props.onChange((previousState: any) => ({
                        ...previousState,
                        [props.name]: ev.target.value,
                    }));
                }}
            />
        </Container>
    );
}
