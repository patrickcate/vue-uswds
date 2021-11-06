export function slotHasContent(slot, data) {
  return (
    slot &&
    slot(data) &&
    slot(data).filter(vnode => {
      return (
        vnode.type.toString() !== 'Symbol(Comment)' &&
        vnode.type.toString() !== 'Comment' &&
        vnode.children !== null &&
        (Array.isArray(vnode.children) ||
          typeof vnode.children === 'object' ||
          (typeof vnode.children === 'string' && vnode.children.trim() !== ''))
      )
    }).length
  )
}
