export function slotHasContent(slot, data) {
  if (!slot || !slot(data)) {
    return false
  }

  return !!slot(data).filter(vnode => {
    return (
      vnode.type.toString() !== 'Symbol(Comment)' &&
      vnode.type.toString() !== 'Comment' &&
      vnode.children !== null &&
      (Array.isArray(vnode.children) ||
        typeof vnode.children === 'object' ||
        (typeof vnode.children === 'string' && vnode.children.trim() !== ''))
    )
  }).length
}
