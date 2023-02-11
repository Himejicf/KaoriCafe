import { Grid, Text, Container, Title, Image, Button } from '@mantine/core';

const SectionThree = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-three">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image src={require('../Images/lime-bicycle-riding.png')} alt={'sample2'} style={{ width: '100%' }} />
                    </Grid.Col>
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>Raison de création.</Title>
                                Vous avez déjà rejoint un serveur un serveur et vous avez remarquer que soit vous étiez ignorer ou juger celon vôtre statut sur le serveur?
                                Nous souhaitons faire le contraire et voir tout le monde de façon égale.
                                Un environnement amicale ou personne ne rabaisse l'autre ou le juge.
                            </Text>
                        </div>
                        <Button color="yellow">M'en dire plus</Button>
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    );

};

export default SectionThree;
