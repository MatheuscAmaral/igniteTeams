import Header from '@/src/components/header';
import { Container } from './styles';
import HighLight from '@/src/components/highlight';
import GroupCard from '@/src/components/groupCard';

const Groups = () => {
    return (
        <Container>
            <Header/>

            <HighLight 
                title='Turmas' 
                subtitle='Jogue com a sua turma'
            />

            <GroupCard title='Galera do ignite' onPress={() => console.log("dadawd")}/>
            <GroupCard title='Galera do ignite'/>
        </Container>
    )
}

export default Groups;