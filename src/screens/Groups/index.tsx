import Header from '@/src/components/header';
import { Container } from './styles';
import HighLight from '@/src/components/highlight';
import GroupCard from '@/src/components/groupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import ListEmpty from '@/src/components/listEmpty';

interface GroupsProps {
    title: string;
}

const Groups = () => {
    const [groups, setGroups] = useState<GroupsProps[]>([
    ]);

    return (
        <Container>
            <Header/>

            <HighLight 
                title='Turmas' 
                subtitle='Jogue com a sua turma'
            />

           
            <FlatList
                data={groups}
                keyExtractor={item => item.title}
                renderItem={({ item }) => (
                    <GroupCard 
                        title={item.title}
                    />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message='Que tal cadastrar a primeira turma?'
                    />
                )}
            /> 
            
        </Container>
    )
}

export default Groups;