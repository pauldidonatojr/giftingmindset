import styled from 'styled-components'
import {
 MainBackground,
 SelectorButtonRow,
} from '../../../components/StyledComponents'
import HeaderRow from '../../../components/HeaderRow'
import SingleButton from '../../../components/SingleButton'
import FamilyTree from '../../../components/FamilyTree'
import { getFamTreeData } from '../../../utils/FetchFamilyTreeData.mjs'
import TreeSearchBar from '../../../components/TreeSearchBar'
import { useEffect, useState } from 'react'
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
 const [treeData, setTreeData] = useState(null)
 useEffect(() => {
  const fetchTreeData = async () => {
   const data = await getFamTreeData()
   setTreeData(data)
  }
  fetchTreeData()
 }, [])
 return (
  <MainBackground>
   <HeaderRow heading={'Downline'} />
   <ContentContainer>
    <SelectorButtonRow>
     <TreeSearchBar />
     <SingleButton ButtonText={'Search'} />
    </SelectorButtonRow>
    <FamilyTreeContainer>
     <FamilyTree data={treeData} />
    </FamilyTreeContainer>
   </ContentContainer>
  </MainBackground>
 )
}

export default GenealogyTree
