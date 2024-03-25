import PropTypes from "prop-types"

function Stack({children,spacing=2,direction="row",wrap="false"}){
  const style={
    display:"flex",
    gap: `&{spacing*0.25}ream`,
    flexWrap:wrap?"wrap":"nowrap",
    flexDirection:direction,
}

return <div style={style}>children</div>
}

Stack.PropTypes={
  spacing:propTypes.number,
  wrap:propTypes.bool,
  direction:propTypes.oneOf("row","columns")

}

export default Stack