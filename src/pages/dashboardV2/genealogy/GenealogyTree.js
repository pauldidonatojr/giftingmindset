import styled from 'styled-components'
import {
 MainBackground,
 SelectorButtonRow,
} from '../../../components/StyledComponents'
import HeaderRow from '../../../components/HeaderRow'
import SingleButton from '../../../components/SingleButton'
import FamilyTree from '../../../components/FamilyTree'
import { FamilyTreeData } from '../../../utils/DummyData'
import TreeSearchBar from '../../../components/TreeSearchBar'
const ContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`
const FamilyTreeContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 height: fit-content;
`

const GenealogyTree = () => {
 return (
  <MainBackground>
   <HeaderRow heading={'Downline'} />
   <ContentContainer>
    <SelectorButtonRow>
     <TreeSearchBar />
     <SingleButton ButtonText={'Search'} />
    </SelectorButtonRow>
    <FamilyTreeContainer>
     <FamilyTree data={FamilyTreeData} />
    </FamilyTreeContainer>
   </ContentContainer>
  </MainBackground>
 )
}

export default GenealogyTree
