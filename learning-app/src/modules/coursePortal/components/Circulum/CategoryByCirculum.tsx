import React from 'react'
import { Grid, Divider, Box, Button } from '@material-ui/core'
import Course2 from './CirculumDetail'
import img from 'assets/logo/logo1.jpg'
import img2 from 'assets/logo/logo2.png'
import img3 from 'assets/logo/logo3.png'
import img4 from 'assets/logo/logo4.png'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function SingleLineGridList(props: any) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      line: {
        display: 'inline-block',
        borderBottom: '3px solid #f9b122',
        paddingBottom: '2px',
      },
      button: {
        float: 'right',
      },
      box: {
        borderRadius: '0 0 10px 10px',
        paddingRight: 8,
        marginBottom: 10,
        paddingBottom: 10,
        width: '100%',
        marginTop: 10,
      },
    }),
  )

  const { id } = props
  const tileData = [
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'แนวคิดและปรัชญาเศรษฐกิจพอเพียง',
      logo: img,
      int: 'จุฬาลงกรณ์มหาวิทยาลัย',
      view: '103293',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
      logo: img2,
      title: 'แนวคิดและปรัชญาของการบริหารทรัพยากรมนุษย์',
      int: 'สำนักงาน ก.พ.',
      view: '1213',
      author: 'director90',
      point: 4.5,
      vote: 100,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
      logo: img3,
      int: 'มหาลัยธรรมสาสตร์',
      title: 'ภาษาจีนชีวิตประจำวัน',
      view: '45833',
      author: 'Danson67',
      point: 3.8,
      vote: 500,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
      logo: img4,
      int: 'มหาวิทยาลัยกรุงเทพ',
      title: 'การเขียนรายงานอย่างถูกต้อง',
      view: '86942',
      point: 4.7,
      vote: 323,
    },
  ]
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('xs'))
  const { title } = props
  const history = useHistory()
  const { path } = useRouteMatch()
  const filterCoursebyCategory = (title: string) => {
    history.push(`${path}/circulum?category=${title}`)
  }
  const Next = () => {
    setTimeout(() => filterCoursebyCategory('หลักสูตร'), 1000)
  }
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
        zeroMinWidth
      >
        <Box
          p={2}
          fontWeight={700}
          style={{ color: 'rgb(19 39 64)' }}
          fontSize="h4.fontSize"
        >
          {title}
        </Box>
        <Button onClick={Next} style={{ color: '#0f1626' }}>
          {' '}
          ดูเพิ่มเติม
        </Button>
      </Grid>
      <Divider style={{ marginBottom: 20 }} />

      <Grid
        container
        direction="row"
        alignItems="center"
        justify={matches ? 'center' : 'flex-start'}
        spacing={matches ? 1 : 2}
      >
        {tileData.map((tile) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Course2
              data={tile.title}
              logo={tile.logo}
              int={tile.int}
              view={tile.view}
              point={tile.point}
              vote={tile.vote}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}