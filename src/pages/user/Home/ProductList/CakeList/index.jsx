import { Button, Col, Row } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { Link, generatePath } from 'react-router-dom'
import { ROUTES } from 'constants/routes'

const CakeList = () => {
  const { productList } = useSelector((state) => state.product)
  const cakeList = productList.data.filter((item) => item.categoryId === 2)

  const renderCakeList = useMemo(() => {
    return cakeList.map((item) => {
      return (
        <Col lg={4} md={8} xs={24} key={item.id}>
          <S.ProductItem>
            <Row>
              <S.ProductImage>
                <img src={item.image} alt="Product" />
              </S.ProductImage>
            </Row>
            <S.ProductWrapper>
              <S.ProductInfo>
                <Row justify="center">
                  <Col lg={24}>
                    <S.ProductName>{item.name}</S.ProductName>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col lg={24}>
                    <S.ProductPrice>
                      {item.price.toLocaleString()} VNĐ
                    </S.ProductPrice>
                  </Col>
                </Row>
              </S.ProductInfo>
              <S.AddToCartButton>
                <Row justify="space-between" align="middle">
                  <Col lg={18}>
                    <S.ShowProductButton>
                      <Link
                        to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                          id: item.id,
                        })}
                      >
                        <Button>Xem thêm</Button>
                      </Link>
                    </S.ShowProductButton>
                  </Col>
                  <Col lg={6}>
                    <S.IconCart>
                      <Button type="text">
                        <ShoppingCartOutlined />
                      </Button>
                    </S.IconCart>
                  </Col>
                </Row>
              </S.AddToCartButton>
            </S.ProductWrapper>
          </S.ProductItem>
        </Col>
      )
    })
  }, [cakeList])
  return (
    <S.CakeListWrapper>
      <S.Container>
        <Row>
          <Col lg={24}>
            <Row justify="center">
              <Col lg={24} md={24} xs={24}>
                <S.Title>Bánh Ngọt</S.Title>
              </Col>
            </Row>
            <Row wrap={true} gutter={[30, 16]} justify="center">
              {renderCakeList}
            </Row>
          </Col>
        </Row>
      </S.Container>
    </S.CakeListWrapper>
  )
}

export default CakeList
