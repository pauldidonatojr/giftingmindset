import React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import Male from '../assets/images/MaleTree.png'
import Female from '../assets/images/FemaleTree.png'
import { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import SingleButton from './SingleButton'

const NodeUi = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`
const LoaderContainer = styled.div`
 display: flex;
 align-self: center;
`
const NodeImg = styled.img`
 height: 100px;
 width: 100px;
 background-color: ${(props) => {
  return props.parent ? '' : 'red'
 }};
 border-radius: 50px;
`
const nodeHistoryArray = []
let nodeHistoryArrayIndex = 0
const FamilyTree = ({ data, setNodeId }) => {
 const [treeNodes, setTreeNodes] = useState(data)
 useEffect(() => {
  setTreeNodes(data)

  nodeHistoryArrayIndex = nodeHistoryArray.length - 1
 }, [data])

 const handleClick = (nodeData) => {
  if (nodeHistoryArray.indexOf(data[0]) === -1) {
   setNodeId(nodeData.id)
   nodeHistoryArray.push(data[0])
  }
 }

 const onClickBackButton = () => {
  if (nodeHistoryArray.length > 0) {
   setTreeNodes([nodeHistoryArray[nodeHistoryArrayIndex]])
   if (nodeHistoryArrayIndex >= 1) {
    nodeHistoryArrayIndex--
   }
   console.log(nodeHistoryArray[nodeHistoryArrayIndex])
  }
 }
 return treeNodes === 'loading' ? (
  <LoaderContainer>
   <CircularProgress sx={{ color: 'white' }} />
  </LoaderContainer>
 ) : (treeNodes == null) | !Array.isArray(treeNodes) ? (
  <>
   <Alert style={{ margin: '100px' }} severity="error">
    <strong>Error : </strong>
    No data to show!
   </Alert>
   <SingleButton
    ButtonText={'Reset data'}
    onClick={() => {
     setNodeId('1')
    }}
   />
  </>
 ) : (
  <>
   <ArrowBackIcon
    sx={{
     color: 'white',
     fontSize: '45px',
     marginLeft: '80px',
     cursor: 'pointer',
    }}
    onClick={() => {
     onClickBackButton()
    }}
   />
   {treeNodes.map((element) => {
    return (
     <Tree
      lineWidth={'2px'}
      lineColor={'white'}
      lineBorderRadius={'10px'}
      label={
       <NodeUi
        onClick={() => {
         handleClick(element)
        }}
       >
        {element.gender == 'male' ? (
         <NodeImg parent src={Male} />
        ) : (
         <NodeImg parent src={Female} />
        )}
        <Typography variant="tree_parent"> {element.name}</Typography>
        <Typography variant="tree_parent"> {element.id}</Typography>
       </NodeUi>
      }
     >
      {element.children?.length &&
       element.children.slice(0, 3).map((childElement) => {
        return (
         <TreeNode
          label={
           <NodeUi
            onClick={() => {
             handleClick(childElement)
            }}
           >
            {childElement.gender == 'male' ? (
             <NodeImg src={Male} />
            ) : (
             <NodeImg src={Female} />
            )}
            <Typography variant="tree_child"> {childElement.name}</Typography>
            <Typography variant="tree_child"> {childElement.id}</Typography>
           </NodeUi>
          }
         >
          {childElement.children?.length &&
           childElement.children.slice(0, 3).map((grandChildElement) => {
            return (
             <TreeNode
              label={
               <NodeUi
                onClick={() => {
                 handleClick(grandChildElement)
                }}
               >
                {grandChildElement.gender == 'male' ? (
                 <NodeImg src={Male} />
                ) : (
                 <NodeImg src={Female} />
                )}
                <Typography variant="tree_child">
                 {grandChildElement.name}
                </Typography>
                <Typography variant="tree_child">
                 {grandChildElement.id}
                </Typography>
               </NodeUi>
              }
             ></TreeNode>
            )
           })}
         </TreeNode>
        )
       })}
     </Tree>
    )
   })}
  </>
 )
}
export default FamilyTree
