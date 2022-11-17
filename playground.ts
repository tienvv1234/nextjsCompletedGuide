

export default async function play() {

    type Greeting = { message: string };
    type InterHelloProps<T> = T extends () => Promise<{props: infer Props}> ? Props :  never

    const getHelloProps = async function () {
        const greeting: Greeting = { message: 'hello' };

        return {
            props: {
                greeting,
                data: {
                    cars: ['ford', 'honda']
                }
            }
        };
    }

    function sayHello(props: InterHelloProps<typeof getHelloProps>) {
        console.log(props.greeting);
    }

    const data = await getHelloProps();
    sayHello(data.props);
}