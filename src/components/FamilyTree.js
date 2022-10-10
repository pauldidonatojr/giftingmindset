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

const FamilyTree = ({ data, setNodeId }) => {
 const [treeNodes, setTreeNodes] = useState(data)

 useEffect(() => {
  setTreeNodes(data)
 }, [data])

 const handleClick = (nodeData) => {
  setNodeId(nodeData.id)
  if (!nodeHistoryArray.includes(nodeData.id)) {
   nodeHistoryArray.push(nodeData.id)
  }
  // setTreeNodes([nodeData])
  console.log(nodeHistoryArray)
 }

 const popNodeFromArray = () => {
  nodeHistoryArray.pop()
  console.log(nodeHistoryArray)
  if (nodeHistoryArray.length > 0) {
   // console.log()
   //  setTreeNodes([nodeHistoryArray[nodeHistoryArray.length - 1]])
   setNodeId(nodeHistoryArray[nodeHistoryArray.length - 1])
  } else {
   setNodeId('1')
  }

  // else {
  //  setTreeNodes(data)
  // }
 }

 return treeNodes !== null ? (
  <>
   <ArrowBackIcon
    sx={{
     color: 'white',
     fontSize: '45px',
     marginLeft: '80px',
     cursor: 'pointer',
    }}
    onClick={() => {
     popNodeFromArray()
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
 ) : (
  <LoaderContainer>
   <CircularProgress sx={{ color: 'white' }} />
  </LoaderContainer>
 )
}
export default FamilyTree
