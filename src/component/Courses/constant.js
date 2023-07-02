import i18next from 'i18next';
import React from 'react';
import { styled } from '@material-ui/core'

export const ACCESS_LEVEL_OPTIONS = () => [
    {
      label: i18next.t('word.All'),
      value: '',
    },
    {
      label: i18next.t('word.danhtu'),
      value: true,
    },
    {
      label: i18next.t('word.dongtu'),
      value: false,
    },
  ]

  export const TableResponsive = styled('div')({
    overflowX: 'auto',
    flex: 1,
    '& table': {
      minWidth: 800,
      // tableLayout: 'fixed',
      fontSize: 14,
    },
    '& th': {
      fontSize: '14px',
      background: '#F2F2F2',
      color: '#000',
      fontWeight: 'bold',
      minWidth: 200,
      '&:focus': {
        outline: 'solid 2px transparent',
      },
    },
    '& th:last-child': {
      borderRight: 'none',
    },
    '& th, & td': {
      padding: '4px 10px',
      verticalAlign: 'middle',
    },
    '& td': {
      padding: '10px',
    },
    '& th:last-child .thBorder': {
      borderRight: 'none !important',
    },
    // project table column
    '& th[data-testid="accessGroup--head--cell"], & th[data-testid="accessUser--head--cell"], & th[data-testid="minWidth--head--cell"]':
      {
        minWidth: 150,
        // textAlign: 'center',
        // '& > span': {
        //   width: '100%',
        //   justifyContent: 'center',
        // },
      },
    '& th[data-testid="accessLevel--head--cell"]': {
      minWidth: 150,
    },
  
    '& th:first-child, & td:first-child': {
      // name column
      paddingLeft: 10,
      minWidth: 200,
      wordBreak: 'break-word',
      maxWidth: 250,
    },
    '& th:last-child, & td:last-child': {
      // action column
      paddingRight: 10,
      minWidth: 130,
    },
    '& th >span::before, & th >span::after': {
      display: 'none',
    },
    '& nav': {
      display: 'none', // hide default table navigation to use custom table navigation
    },
    jiraheader: {
      display: 'flex',
      minHeight: 40,
      padding: 4,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRight: '2px #e2e2e2 solid',
    },
  })