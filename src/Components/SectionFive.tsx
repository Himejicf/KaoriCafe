import { Accordion, Text, Container, Title, Badge } from '@mantine/core';
import { FiCoffee, FiCloudSnow, FiAnchor } from "react-icons/fi";

const SectionFive = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-five">
            <Container>
                <div style={{ marginBottom: 30 }}>
                    <div style={{ textAlign: 'left' }}><Badge variant="filled" color="yellow">FAQs</Badge></div>
                    <Text color="black">
                        <Title order={1} style={{ marginTop: 10 }}>Woah, questions fréquemment posées ici</Title>
                    </Text>
                </div>

                <Accordion variant="contained">
                    <Accordion.Item value="item1">
                        <Accordion.Control icon={<FiCoffee size={20} color={"#fab005"} />}>
                            Vous êtes actif?
                        </Accordion.Control>
                        <Accordion.Panel>Oui mais certainement fois c'est calme.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item2">
                        <Accordion.Control icon={<FiCloudSnow size={20} color={"#fab005"} />}>
                            Le second degrès est autoriser?
                        </Accordion.Control>
                        <Accordion.Panel>Non même avec modération sa ne l'es pas.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item3">
                        <Accordion.Control icon={<FiAnchor size={20} color={"#fab005"} />}>
                            Le bot Kaori est à vous?
                        </Accordion.Control>
                        <Accordion.Panel>Oui il est à nous!</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );

};

export default SectionFive;
