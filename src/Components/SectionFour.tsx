import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Badge, Button, Group } from '@mantine/core';

const SectionFour = () => {
    const theme = useMantineTheme();

    return (
        <section id="section-four">
            <Container>
                <Text color="black" align="center">
                    <Title order={1} mb="30px">Raison de rejoindre</Title>
                </Text>

                <Grid>
                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Card shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image src={require('../Images/lime-welcome.png')} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Respect mutuelle</Text>
                                <Badge color="yellow" variant="light">
                                    Respect
                                </Badge>
                            </Group>

                            <Text size="sm">
                                Une communauté respectueuse, amicale et où tu t'intégrera vite.
                            </Text>

                            <Button variant="light" color="yellow" fullWidth mt="14px">
                                Découvrez
                            </Button>
                        </Card>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Card shadow="sm" p="lg" style={{ height: '100%' }}>
                            <Card.Section>
                                <Image src={require('../Images/lime-canoeing.png')} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Accueillant</Text>
                                <Badge color="yellow" variant="light">
                                    Accueil
                                </Badge>
                            </Group>

                            <Text size="sm">
                                Nous sommes une communauté accueillante tu ne seras jamais mis de cotés.
                            </Text>

                            <Button variant="light" color="yellow" fullWidth mt="14px">
                                Découvrez
                            </Button>
                        </Card>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Card shadow="sm" p="lg" style={{ height: '100%' }}>
                            <Card.Section>
                                <Image src={require('../Images/lime-message-sent.png')} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Actif</Text>
                                <Badge color="yellow" variant="light">
                                    Actif
                                </Badge>
                            </Group>

                            <Text size="sm">
                                Nous sommes actif et activement modérer et beaucoup actif pendant les vacances.
                            </Text>

                            <Button variant="light" color="yellow" fullWidth mt="14px">
                                Découvrez
                            </Button>
                        </Card>
                    </Grid.Col>
                </Grid>

            </Container>
        </section>
    );
};

export default SectionFour;
