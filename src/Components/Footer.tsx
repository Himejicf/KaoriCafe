import { useMantineTheme, Container, Grid, Text, Button, Group, Avatar, UnstyledButton, Anchor, Code } from '@mantine/core';

const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: theme.colors.yellow[6]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col xs={12} sm={8} md={8} lg={8}>
                        
                        <Text size="xl" weight={700} color="white" mb="10px">Kaori Café</Text>

                        <Text color="white" mb="5px">
                            Rejoint nous plus ont est fou plus ont rie
                        </Text>

                        <Text color="white" mb="20px">
                            Tu peut nous rejoindre en cliquant <Anchor href="https://discord.gg/kaori">ici</Anchor>
                        </Text>

                        <Button variant="white" color="black" onClick={() => redirectToLink('https://discord.gg/kaori')}>Rejoindre</Button>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Code color="yellow" style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 15 }}>
                            Nous contacter
                            <Anchor href="https://discord.gg/kaori">
                                <UnstyledButton>
                                    <Group>
                                        <Avatar size={40} color="orange">KC</Avatar>
                                        <div>
                                            <Text>Giuseppetm</Text>
                                            <Text size="xs" color="dimmed">strawofficiel@gmail.com</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
                            </Anchor>
                        </Code>
                    </Grid.Col>
                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};
