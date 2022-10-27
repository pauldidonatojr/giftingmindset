import React, { Component } from 'react'
import styled from 'styled-components'
import * as Mui from '@mui/material'
import { TextField } from '@mui/material'

export const WhiteBorderTextField = styled(TextField)`
 & label {
  color: white;
 }
 & label.Mui-focused {
  color: white;
 }
 & .MuiOutlinedInput-root {
  &.Mui-focused fieldset {
   border-color: white;
  }
 }
`
export const SelectorButtonRow = styled.div`
 display: flex;
 flex-direction: row;
 width: 50%;
 height: fit-content;
 gap: 20px;
`
export const MainBackground = styled.div`
 padding-left: 75px;
 display: flex;
 flex-direction: column;
 width: 100%;
 height: 100vh;
 background-color: #1e2026;
 align-items: center;
 overflow-y: auto;
`

export const TypographyRowDiv = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;
 height: fit-content;
 justify-content: space-between;
 margin-bottom: 15px;
`
export const CardRowDiv = styled.div`
 display: flex;
 overflow-x: scroll;
 flex-direction: row;
 /* height: fit-content; */
 padding-top: 5px;
 padding-bottom: 10px;
 gap: 12px;
`
export const Error = styled.div`
 color: red;
 font-size: 13px;
`

export const TextFieldColumn = styled.div`
 display: flex;
 flex-direction: column;
 height: 60px;
 margin-bottom: 5px;
 align-items: center;
`
export const SubHeadingCardDiv = styled.div`
 display: flex;
 flex-direction: column;
 padding-left: 25px;
 margin-top: 20px;
`

export const Heading_SearchDiv = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 padding-left: 25px;
 padding-right: 25px;
`

export const MainDiv = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 overflow-y: auto;
 /* position: absolute; */
 margin-bottom: 100px;
`

export const BackgroundDiv = styled.div`
 height: 100%;
 width: 100%;
 display: flex;
 flex-direction: column;
 position: absolute;
 background-attachment: fixed;
 background-size: cover;
 justify-content: space-around;
 align-items: center;
`
export const MainColDiv = styled.div`
 display: flex;
 flex-direction: column;
 height: 60%;
 max-width: 300px;
 align-items: center;
 justify-content: center;
 border-radius: 5px;
 box-shadow: -1px 0px 8px 2px rgba(0, 0, 0, 0.39);
`
export const LowerRowDiv = styled.div`
 justify-content: space-between;
 display: flex;
 flex-direction: row;
 height: 5%;
 width: 95%;
`
export const Logo = styled.img`
 width: 80%;
 margin-bottom: 20px;
 border-radius: 5px;
`
export const LowerButtonContainerDiv = styled.div`
 display: flex;
 flex-direction: row;
 height: 100%;
 width: 80px;
 justify-content: center;
 align-items: center;
`
export const LowerIcon = styled.img`
 height: 35%;
 width: 35%;
 color: #005d9e;
`

export const TextFieldContainerRowDiv = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;
 height: fit-content;
 justify-content: center;
`
export const TextfieldIcon = styled.img`
 background-color: grey;
 height: 50%;
`
export const TextfieldIconContainerDiv = styled.div`
 display: flex;
 flex-direction: column;
 background-color: grey;
 justify-content: center;
 align-items: center;
 height: 100%;
 width: 50px;
`
export const ClickText = styled(Mui.Link)`
 font-family: 'Lato';
 font-weight: 400;
 font-size: 10px;
 color: #005d9e;
 cursor: pointer;
`

export const ClickTextLower = styled(Mui.Link)``
export const InputField = styled(Mui.OutlinedInput)`
 background-color: white;
`
