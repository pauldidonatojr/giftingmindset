import React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import Male from '../assets/images/MaleTree.png'
import Female from '../assets/images/FemaleTree.png'

const NodeUi = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`
const NodeImg = styled.img`
 height: 100px;
 width: 100px;
 background-color: ${(props) => {
  return props.parent ? '' : 'red'
 }};
 border-radius: 50px;
`

const FamilyTree = ({ data }) => {
 const nodeHistoryArray = []
 const [treeData, setTreeData] = useState(data)

 const handleClick = (nodeData) => {
  setTreeData([nodeData])
  nodeHistoryArray.push(nodeData)
 }

 const popNodeFromArray = () => {
  nodeHistoryArray.pop()
  console.log(nodeHistoryArray)
  if (nodeHistoryArray.length > 0) {
   setTreeData([nodeHistoryArray[nodeHistoryArray.length - 1]])
  } else {
   setTreeData(data)
  }
 }

 return (
  <>
   <ArrowBackIcon
    sx={{ color: 'white', fontSize: '45px' }}
    onClick={() => {
     popNodeFromArray()
    }}
   />
   {treeData.map((element) => {
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
        {element.gender === 'Male' ? (
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
       element.children.map((childElement) => {
        return (
         <TreeNode
          label={
           <NodeUi
            onClick={() => {
             handleClick(childElement)
            }}
           >
            {childElement.gender === 'Male' ? (
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
           childElement.children.map((grandChildElement) => {
            return (
             <TreeNode
              label={
               <NodeUi
                onClick={() => {
                 handleClick(grandChildElement)
                }}
               >
                {grandChildElement.gender === 'Male' ? (
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
