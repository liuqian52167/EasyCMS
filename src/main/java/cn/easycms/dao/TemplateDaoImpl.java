package cn.easycms.dao;

import cn.easycms.base.BaseDaoImpl;
import cn.easycms.model.Template;

import java.util.List;

/**
 * Created by hackingwu on 2014/4/8.
 */
public class TemplateDaoImpl extends BaseDaoImpl {
    @Override
    public List findAll() {
        return getCurrentSession()
                .createQuery("from Template")
                .list();
    }

    @Override
    public Object get(String id) {
        return getCurrentSession().get(Template.class,id);
    }
}
